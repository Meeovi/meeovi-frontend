import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configCreateManyInput } from "../../../inputs/User_configCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUser_configArgs {
  @TypeGraphQL.Field(_type => [User_configCreateManyInput], {
    nullable: false
  })
  data!: User_configCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
