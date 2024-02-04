import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCms_pageInputEnvelope } from "../inputs/ProductCreateManyCms_pageInputEnvelope";
import { ProductCreateOrConnectWithoutCms_pageInput } from "../inputs/ProductCreateOrConnectWithoutCms_pageInput";
import { ProductCreateWithoutCms_pageInput } from "../inputs/ProductCreateWithoutCms_pageInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCms_pageInput } from "../inputs/ProductUpdateManyWithWhereWithoutCms_pageInput";
import { ProductUpdateWithWhereUniqueWithoutCms_pageInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCms_pageInput";
import { ProductUpsertWithWhereUniqueWithoutCms_pageInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCms_pageInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutCms_pageNestedInput", {})
export class ProductUpdateManyWithoutCms_pageNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyCms_pageInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCms_pageInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
