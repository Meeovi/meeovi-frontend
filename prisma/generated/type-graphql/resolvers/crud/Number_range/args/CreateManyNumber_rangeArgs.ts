import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeCreateManyInput } from "../../../inputs/Number_rangeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNumber_rangeArgs {
  @TypeGraphQL.Field(_type => [Number_rangeCreateManyInput], {
    nullable: false
  })
  data!: Number_rangeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
