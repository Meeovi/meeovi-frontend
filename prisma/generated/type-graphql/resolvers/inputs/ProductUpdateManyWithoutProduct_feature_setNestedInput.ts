import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_feature_setInputEnvelope } from "../inputs/ProductCreateManyProduct_feature_setInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_feature_setInput } from "../inputs/ProductCreateOrConnectWithoutProduct_feature_setInput";
import { ProductCreateWithoutProduct_feature_setInput } from "../inputs/ProductCreateWithoutProduct_feature_setInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProduct_feature_setInput } from "../inputs/ProductUpdateManyWithWhereWithoutProduct_feature_setInput";
import { ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput";
import { ProductUpsertWithWhereUniqueWithoutProduct_feature_setInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProduct_feature_setInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutProduct_feature_setNestedInput", {})
export class ProductUpdateManyWithoutProduct_feature_setNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_feature_setInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_feature_setInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProduct_feature_setInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_feature_setInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_feature_setInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProduct_feature_setInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
