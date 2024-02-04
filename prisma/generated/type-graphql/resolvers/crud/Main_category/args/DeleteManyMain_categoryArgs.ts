import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryWhereInput } from "../../../inputs/Main_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  where?: Main_categoryWhereInput | undefined;
}
