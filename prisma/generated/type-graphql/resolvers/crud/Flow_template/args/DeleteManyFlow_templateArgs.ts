import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateWhereInput } from "../../../inputs/Flow_templateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateWhereInput, {
    nullable: true
  })
  where?: Flow_templateWhereInput | undefined;
}
