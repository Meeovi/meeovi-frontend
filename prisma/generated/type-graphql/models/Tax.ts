import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Shipping_method } from "../models/Shipping_method";
import { Tax_rule } from "../models/Tax_rule";
import { TaxCount } from "../resolvers/outputs/TaxCount";

@TypeGraphQL.ObjectType("Tax", {})
export class Tax {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  tax_rate?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product?: Product[];

  shipping_method?: Shipping_method[];

  tax_rule?: Tax_rule[];

  @TypeGraphQL.Field(_type => TaxCount, {
    nullable: true
  })
  _count?: TaxCount | null;
}
