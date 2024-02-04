import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateWithoutSalutationInput";
import { Newsletter_recipientUpdateWithoutSalutationInput } from "../inputs/Newsletter_recipientUpdateWithoutSalutationInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput", {})
export class Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutSalutationInput, {
    nullable: false
  })
  update!: Newsletter_recipientUpdateWithoutSalutationInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutSalutationInput;
}
