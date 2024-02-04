import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logCreateManyInput } from "../../../inputs/Klarna_payment_request_logCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => [Klarna_payment_request_logCreateManyInput], {
    nullable: false
  })
  data!: Klarna_payment_request_logCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
