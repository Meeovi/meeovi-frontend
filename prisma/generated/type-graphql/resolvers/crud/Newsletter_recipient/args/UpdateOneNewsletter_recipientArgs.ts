import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientUpdateInput } from "../../../inputs/Newsletter_recipientUpdateInput";
import { Newsletter_recipientWhereUniqueInput } from "../../../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;
}
