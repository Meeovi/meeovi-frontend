import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_product_parent_id_parent_version_idToproductInputEnvelope } from "../inputs/ProductCreateManyProduct_product_parent_id_parent_version_idToproductInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateOrConnectWithoutProduct_product_parent_id_parent_version_idToproductInput";
import { ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput", {})
export class ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_product_parent_id_parent_version_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_product_parent_id_parent_version_idToproductInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_product_parent_id_parent_version_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_product_parent_id_parent_version_idToproductInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_product_parent_id_parent_version_idToproductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
