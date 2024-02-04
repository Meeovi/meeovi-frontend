import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateWhereUniqueInput } from "../../../inputs/Flow_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_templateWhereUniqueInput;
}
