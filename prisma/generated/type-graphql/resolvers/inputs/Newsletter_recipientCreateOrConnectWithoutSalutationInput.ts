import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateWithoutSalutationInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateOrConnectWithoutSalutationInput", {})
export class Newsletter_recipientCreateOrConnectWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutSalutationInput;
}
