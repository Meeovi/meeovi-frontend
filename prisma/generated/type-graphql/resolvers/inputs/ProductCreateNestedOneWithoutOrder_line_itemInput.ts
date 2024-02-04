import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/ProductCreateOrConnectWithoutOrder_line_itemInput";
import { ProductCreateWithoutOrder_line_itemInput } from "../inputs/ProductCreateWithoutOrder_line_itemInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutOrder_line_itemInput", {})
export class ProductCreateNestedOneWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
