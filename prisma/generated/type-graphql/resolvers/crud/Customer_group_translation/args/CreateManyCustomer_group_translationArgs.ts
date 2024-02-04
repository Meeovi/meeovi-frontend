import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationCreateManyInput } from "../../../inputs/Customer_group_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => [Customer_group_translationCreateManyInput], {
    nullable: false
  })
  data!: Customer_group_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
