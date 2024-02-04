import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientUpdateWithoutSalutationInput } from "../inputs/Newsletter_recipientUpdateWithoutSalutationInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput", {})
export class Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutSalutationInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateWithoutSalutationInput;
}
