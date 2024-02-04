import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyCreateManyInput } from "../../../inputs/User_access_keyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUser_access_keyArgs {
  @TypeGraphQL.Field(_type => [User_access_keyCreateManyInput], {
    nullable: false
  })
  data!: User_access_keyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
