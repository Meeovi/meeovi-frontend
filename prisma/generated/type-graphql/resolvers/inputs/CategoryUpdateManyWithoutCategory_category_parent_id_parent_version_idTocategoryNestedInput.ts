import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope } from "../inputs/CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope";
import { CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryUpdateWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryUpsertWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput", {})
export class CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
