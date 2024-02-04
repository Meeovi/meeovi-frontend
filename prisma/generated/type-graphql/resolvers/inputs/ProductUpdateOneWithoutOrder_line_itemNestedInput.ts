import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/ProductCreateOrConnectWithoutOrder_line_itemInput";
import { ProductCreateWithoutOrder_line_itemInput } from "../inputs/ProductCreateWithoutOrder_line_itemInput";
import { ProductUpdateToOneWithWhereWithoutOrder_line_itemInput } from "../inputs/ProductUpdateToOneWithWhereWithoutOrder_line_itemInput";
import { ProductUpsertWithoutOrder_line_itemInput } from "../inputs/ProductUpsertWithoutOrder_line_itemInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneWithoutOrder_line_itemNestedInput", {})
export class ProductUpdateOneWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOrder_line_itemInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  disconnect?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  delete?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutOrder_line_itemInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutOrder_line_itemInput | undefined;
}
