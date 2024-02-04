import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCreateManyTagInputEnvelope } from "../inputs/Landing_page_tagCreateManyTagInputEnvelope";
import { Landing_page_tagCreateOrConnectWithoutTagInput } from "../inputs/Landing_page_tagCreateOrConnectWithoutTagInput";
import { Landing_page_tagCreateWithoutTagInput } from "../inputs/Landing_page_tagCreateWithoutTagInput";
import { Landing_page_tagScalarWhereInput } from "../inputs/Landing_page_tagScalarWhereInput";
import { Landing_page_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Landing_page_tagUpdateManyWithWhereWithoutTagInput";
import { Landing_page_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Landing_page_tagUpdateWithWhereUniqueWithoutTagInput";
import { Landing_page_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Landing_page_tagUpsertWithWhereUniqueWithoutTagInput";
import { Landing_page_tagWhereUniqueInput } from "../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateManyWithoutTagNestedInput", {})
export class Landing_page_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Landing_page_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Landing_page_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Landing_page_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_page_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_page_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_page_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Landing_page_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Landing_page_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_page_tagScalarWhereInput[] | undefined;
}
