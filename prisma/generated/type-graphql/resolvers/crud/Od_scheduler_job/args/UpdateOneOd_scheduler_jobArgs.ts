import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobUpdateInput } from "../../../inputs/Od_scheduler_jobUpdateInput";
import { Od_scheduler_jobWhereUniqueInput } from "../../../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOd_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateInput, {
    nullable: false
  })
  data!: Od_scheduler_jobUpdateInput;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: false
  })
  where!: Od_scheduler_jobWhereUniqueInput;
}
