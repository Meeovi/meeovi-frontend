import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateUpdateManyMutationInput } from "../../../inputs/Mail_templateUpdateManyMutationInput";
import { Mail_templateWhereInput } from "../../../inputs/Mail_templateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_templateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;
}
