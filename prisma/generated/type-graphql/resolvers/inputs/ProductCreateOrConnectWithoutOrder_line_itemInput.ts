import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrder_line_itemInput } from "../inputs/ProductCreateWithoutOrder_line_itemInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutOrder_line_itemInput", {})
export class ProductCreateOrConnectWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrder_line_itemInput;
}
