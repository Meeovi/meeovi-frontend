import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCustom_entityInputEnvelope } from "../inputs/CategoryCreateManyCustom_entityInputEnvelope";
import { CategoryCreateOrConnectWithoutCustom_entityInput } from "../inputs/CategoryCreateOrConnectWithoutCustom_entityInput";
import { CategoryCreateWithoutCustom_entityInput } from "../inputs/CategoryCreateWithoutCustom_entityInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutCustom_entityInput } from "../inputs/CategoryUpdateManyWithWhereWithoutCustom_entityInput";
import { CategoryUpdateWithWhereUniqueWithoutCustom_entityInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutCustom_entityInput";
import { CategoryUpsertWithWhereUniqueWithoutCustom_entityInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutCustom_entityInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutCustom_entityNestedInput", {})
export class CategoryUpdateManyWithoutCustom_entityNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCustom_entityInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCustom_entityInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutCustom_entityInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCustom_entityInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCustom_entityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutCustom_entityInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutCustom_entityInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
