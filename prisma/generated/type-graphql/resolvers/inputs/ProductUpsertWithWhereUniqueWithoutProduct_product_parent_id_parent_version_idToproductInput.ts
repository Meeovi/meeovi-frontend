import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput";
import { ProductUpdateWithoutProduct_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductUpdateWithoutProduct_product_parent_id_parent_version_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutProduct_product_parent_id_parent_version_idToproductInput", {})
export class ProductUpsertWithWhereUniqueWithoutProduct_product_parent_id_parent_version_idToproductInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_product_parent_id_parent_version_idToproductInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_product_parent_id_parent_version_idToproductInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput;
}
