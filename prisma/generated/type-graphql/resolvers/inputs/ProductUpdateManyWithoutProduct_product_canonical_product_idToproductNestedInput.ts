import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_product_canonical_product_idToproductInputEnvelope } from "../inputs/ProductCreateManyProduct_product_canonical_product_idToproductInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductCreateOrConnectWithoutProduct_product_canonical_product_idToproductInput";
import { ProductCreateWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductCreateWithoutProduct_product_canonical_product_idToproductInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductUpdateManyWithWhereWithoutProduct_product_canonical_product_idToproductInput";
import { ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput";
import { ProductUpsertWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput", {})
export class ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_product_canonical_product_idToproductInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_product_canonical_product_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_product_canonical_product_idToproductInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_product_canonical_product_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_product_canonical_product_idToproductInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_product_canonical_product_idToproductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProduct_product_canonical_product_idToproductInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutProduct_product_canonical_product_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
