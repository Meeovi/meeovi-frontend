import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenCreateManyInput } from "../../../inputs/Payment_tokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPayment_tokenArgs {
  @TypeGraphQL.Field(_type => [Payment_tokenCreateManyInput], {
    nullable: false
  })
  data!: Payment_tokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
