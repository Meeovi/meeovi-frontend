import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_manufacturerInput } from "../inputs/ProductCreateWithoutProduct_manufacturerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_manufacturerInput", {})
export class ProductCreateOrConnectWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_manufacturerInput;
}
