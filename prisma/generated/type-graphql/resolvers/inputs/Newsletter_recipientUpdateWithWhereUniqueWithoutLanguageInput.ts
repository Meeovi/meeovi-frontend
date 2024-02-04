import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientUpdateWithoutLanguageInput } from "../inputs/Newsletter_recipientUpdateWithoutLanguageInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Newsletter_recipientUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateWithoutLanguageInput;
}
