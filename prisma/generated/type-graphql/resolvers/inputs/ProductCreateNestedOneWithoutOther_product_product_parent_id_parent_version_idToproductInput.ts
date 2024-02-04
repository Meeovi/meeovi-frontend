import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput", {})
export class ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
