import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutPromotion_persona_customerInput } from "../inputs/CustomerUpdateWithoutPromotion_persona_customerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput", {})
export class CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPromotion_persona_customerInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutPromotion_persona_customerInput;
}
