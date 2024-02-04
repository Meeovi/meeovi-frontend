import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyProductInputEnvelope } from "../inputs/Main_categoryCreateManyProductInputEnvelope";
import { Main_categoryCreateOrConnectWithoutProductInput } from "../inputs/Main_categoryCreateOrConnectWithoutProductInput";
import { Main_categoryCreateWithoutProductInput } from "../inputs/Main_categoryCreateWithoutProductInput";
import { Main_categoryScalarWhereInput } from "../inputs/Main_categoryScalarWhereInput";
import { Main_categoryUpdateManyWithWhereWithoutProductInput } from "../inputs/Main_categoryUpdateManyWithWhereWithoutProductInput";
import { Main_categoryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Main_categoryUpdateWithWhereUniqueWithoutProductInput";
import { Main_categoryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Main_categoryUpsertWithWhereUniqueWithoutProductInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateManyWithoutProductNestedInput", {})
export class Main_categoryUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutProductInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Main_categoryUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Main_categoryUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Main_categoryUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Main_categoryUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Main_categoryScalarWhereInput[] | undefined;
}
