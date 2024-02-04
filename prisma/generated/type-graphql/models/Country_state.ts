import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Country } from "../models/Country";
import { Country_state_translation } from "../models/Country_state_translation";
import { Customer_address } from "../models/Customer_address";
import { Order_address } from "../models/Order_address";
import { Country_stateCount } from "../resolvers/outputs/Country_stateCount";

@TypeGraphQL.ObjectType("Country_state", {})
export class Country_state {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  country_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  short_code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  country?: Country;

  country_state_translation?: Country_state_translation[];

  customer_address?: Customer_address[];

  order_address?: Order_address[];

  @TypeGraphQL.Field(_type => Country_stateCount, {
    nullable: true
  })
  _count?: Country_stateCount | null;
}
