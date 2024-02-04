import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyTagInputEnvelope } from "../inputs/Category_tagCreateManyTagInputEnvelope";
import { Category_tagCreateOrConnectWithoutTagInput } from "../inputs/Category_tagCreateOrConnectWithoutTagInput";
import { Category_tagCreateWithoutTagInput } from "../inputs/Category_tagCreateWithoutTagInput";
import { Category_tagScalarWhereInput } from "../inputs/Category_tagScalarWhereInput";
import { Category_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Category_tagUpdateManyWithWhereWithoutTagInput";
import { Category_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Category_tagUpdateWithWhereUniqueWithoutTagInput";
import { Category_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Category_tagUpsertWithWhereUniqueWithoutTagInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagUpdateManyWithoutTagNestedInput", {})
export class Category_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Category_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Category_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Category_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Category_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Category_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Category_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Category_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Category_tagScalarWhereInput[] | undefined;
}
