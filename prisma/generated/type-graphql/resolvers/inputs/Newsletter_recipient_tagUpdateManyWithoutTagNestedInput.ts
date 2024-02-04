import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateManyTagInputEnvelope } from "../inputs/Newsletter_recipient_tagCreateManyTagInputEnvelope";
import { Newsletter_recipient_tagCreateOrConnectWithoutTagInput } from "../inputs/Newsletter_recipient_tagCreateOrConnectWithoutTagInput";
import { Newsletter_recipient_tagCreateWithoutTagInput } from "../inputs/Newsletter_recipient_tagCreateWithoutTagInput";
import { Newsletter_recipient_tagScalarWhereInput } from "../inputs/Newsletter_recipient_tagScalarWhereInput";
import { Newsletter_recipient_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Newsletter_recipient_tagUpdateManyWithWhereWithoutTagInput";
import { Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput";
import { Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpdateManyWithoutTagNestedInput", {})
export class Newsletter_recipient_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Newsletter_recipient_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipient_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipient_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Newsletter_recipient_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Newsletter_recipient_tagScalarWhereInput[] | undefined;
}
