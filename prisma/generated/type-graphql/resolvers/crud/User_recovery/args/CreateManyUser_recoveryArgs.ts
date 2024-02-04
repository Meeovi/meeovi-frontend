import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryCreateManyInput } from "../../../inputs/User_recoveryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUser_recoveryArgs {
  @TypeGraphQL.Field(_type => [User_recoveryCreateManyInput], {
    nullable: false
  })
  data!: User_recoveryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
