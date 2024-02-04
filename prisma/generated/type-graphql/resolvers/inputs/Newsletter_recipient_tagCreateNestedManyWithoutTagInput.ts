import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateManyTagInputEnvelope } from "../inputs/Newsletter_recipient_tagCreateManyTagInputEnvelope";
import { Newsletter_recipient_tagCreateOrConnectWithoutTagInput } from "../inputs/Newsletter_recipient_tagCreateOrConnectWithoutTagInput";
import { Newsletter_recipient_tagCreateWithoutTagInput } from "../inputs/Newsletter_recipient_tagCreateWithoutTagInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateNestedManyWithoutTagInput", {})
export class Newsletter_recipient_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Newsletter_recipient_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipient_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipient_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;
}
