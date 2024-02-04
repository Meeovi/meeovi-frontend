import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyWhereInput } from "../../../inputs/User_access_keyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyWhereInput, {
    nullable: true
  })
  where?: User_access_keyWhereInput | undefined;
}
