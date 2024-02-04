import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyTaxInput } from "../inputs/ProductCreateManyTaxInput";

@TypeGraphQL.InputType("ProductCreateManyTaxInputEnvelope", {})
export class ProductCreateManyTaxInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyTaxInput], {
    nullable: false
  })
  data!: ProductCreateManyTaxInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
