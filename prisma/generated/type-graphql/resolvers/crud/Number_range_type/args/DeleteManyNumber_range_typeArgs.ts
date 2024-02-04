import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeWhereInput } from "../../../inputs/Number_range_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  where?: Number_range_typeWhereInput | undefined;
}
