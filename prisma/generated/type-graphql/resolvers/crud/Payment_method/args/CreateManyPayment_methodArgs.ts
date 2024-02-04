import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodCreateManyInput } from "../../../inputs/Payment_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPayment_methodArgs {
  @TypeGraphQL.Field(_type => [Payment_methodCreateManyInput], {
    nullable: false
  })
  data!: Payment_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
