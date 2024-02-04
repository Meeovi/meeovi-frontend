import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManyLanguageInputEnvelope } from "../inputs/Newsletter_recipientCreateManyLanguageInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutLanguageInput";
import { Newsletter_recipientCreateWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateWithoutLanguageInput";
import { Newsletter_recipientScalarWhereInput } from "../inputs/Newsletter_recipientScalarWhereInput";
import { Newsletter_recipientUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Newsletter_recipientUpdateManyWithWhereWithoutLanguageInput";
import { Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput";
import { Newsletter_recipientUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Newsletter_recipientUpsertWithWhereUniqueWithoutLanguageInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateManyWithoutLanguageNestedInput", {})
export class Newsletter_recipientUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Newsletter_recipientUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  set?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  delete?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Newsletter_recipientUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Newsletter_recipientScalarWhereInput[] | undefined;
}
