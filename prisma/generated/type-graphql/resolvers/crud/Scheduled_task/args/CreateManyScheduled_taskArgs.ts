import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskCreateManyInput } from "../../../inputs/Scheduled_taskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyScheduled_taskArgs {
  @TypeGraphQL.Field(_type => [Scheduled_taskCreateManyInput], {
    nullable: false
  })
  data!: Scheduled_taskCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
