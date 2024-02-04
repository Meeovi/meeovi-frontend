import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobCreateManyInput } from "../../../inputs/Od_scheduler_jobCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOd_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => [Od_scheduler_jobCreateManyInput], {
    nullable: false
  })
  data!: Od_scheduler_jobCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
