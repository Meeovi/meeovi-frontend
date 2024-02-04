import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyCustomerInput } from "../inputs/Product_reviewCreateManyCustomerInput";

@TypeGraphQL.InputType("Product_reviewCreateManyCustomerInputEnvelope", {})
export class Product_reviewCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_reviewCreateManyCustomerInput], {
    nullable: false
  })
  data!: Product_reviewCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
