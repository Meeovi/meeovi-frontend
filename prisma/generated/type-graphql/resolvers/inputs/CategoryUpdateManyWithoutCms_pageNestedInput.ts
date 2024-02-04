import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCms_pageInputEnvelope } from "../inputs/CategoryCreateManyCms_pageInputEnvelope";
import { CategoryCreateOrConnectWithoutCms_pageInput } from "../inputs/CategoryCreateOrConnectWithoutCms_pageInput";
import { CategoryCreateWithoutCms_pageInput } from "../inputs/CategoryCreateWithoutCms_pageInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutCms_pageInput } from "../inputs/CategoryUpdateManyWithWhereWithoutCms_pageInput";
import { CategoryUpdateWithWhereUniqueWithoutCms_pageInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutCms_pageInput";
import { CategoryUpsertWithWhereUniqueWithoutCms_pageInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutCms_pageInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutCms_pageNestedInput", {})
export class CategoryUpdateManyWithoutCms_pageNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutCms_pageInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
