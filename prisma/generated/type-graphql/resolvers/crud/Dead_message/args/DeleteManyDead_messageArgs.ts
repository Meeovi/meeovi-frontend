import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageWhereInput } from "../../../inputs/Dead_messageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  where?: Dead_messageWhereInput | undefined;
}
