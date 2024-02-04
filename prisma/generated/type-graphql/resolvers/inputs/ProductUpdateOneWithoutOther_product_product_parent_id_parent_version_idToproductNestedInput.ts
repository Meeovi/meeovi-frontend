import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductUpdateToOneWithWhereWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductUpdateToOneWithWhereWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductUpsertWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductUpsertWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput", {})
export class ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;
}
