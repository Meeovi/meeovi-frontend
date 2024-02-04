import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientScalarWhereInput } from "../inputs/Newsletter_recipientScalarWhereInput";
import { Newsletter_recipientUpdateManyMutationInput } from "../inputs/Newsletter_recipientUpdateManyMutationInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput", {})
export class Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientScalarWhereInput, {
    nullable: false
  })
  where!: Newsletter_recipientScalarWhereInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateManyMutationInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateManyMutationInput;
}
