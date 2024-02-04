import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateCreateManyInput } from "../../../inputs/Number_range_stateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => [Number_range_stateCreateManyInput], {
    nullable: false
  })
  data!: Number_range_stateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
