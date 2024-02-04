import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManyLanguageInputEnvelope } from "../inputs/Newsletter_recipientCreateManyLanguageInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutLanguageInput";
import { Newsletter_recipientCreateWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateWithoutLanguageInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateNestedManyWithoutLanguageInput", {})
export class Newsletter_recipientCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput[] | undefined;
}
