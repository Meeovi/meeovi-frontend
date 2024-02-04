import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyCategoryInputEnvelope } from "../inputs/Main_categoryCreateManyCategoryInputEnvelope";
import { Main_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Main_categoryCreateOrConnectWithoutCategoryInput";
import { Main_categoryCreateWithoutCategoryInput } from "../inputs/Main_categoryCreateWithoutCategoryInput";
import { Main_categoryScalarWhereInput } from "../inputs/Main_categoryScalarWhereInput";
import { Main_categoryUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Main_categoryUpdateManyWithWhereWithoutCategoryInput";
import { Main_categoryUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Main_categoryUpdateWithWhereUniqueWithoutCategoryInput";
import { Main_categoryUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Main_categoryUpsertWithWhereUniqueWithoutCategoryInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateManyWithoutCategoryNestedInput", {})
export class Main_categoryUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Main_categoryUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  set?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  delete?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Main_categoryUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Main_categoryUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Main_categoryScalarWhereInput[] | undefined;
}
