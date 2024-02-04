import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientUpdateManyMutationInput } from "../../../inputs/Newsletter_recipientUpdateManyMutationInput";
import { Newsletter_recipientWhereInput } from "../../../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateManyMutationInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;
}
