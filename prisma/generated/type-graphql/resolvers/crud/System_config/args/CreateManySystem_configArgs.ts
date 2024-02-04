import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configCreateManyInput } from "../../../inputs/System_configCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySystem_configArgs {
  @TypeGraphQL.Field(_type => [System_configCreateManyInput], {
    nullable: false
  })
  data!: System_configCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
